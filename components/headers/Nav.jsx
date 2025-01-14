"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  const isMenuActive = (menu) => {
    let isActive = false;

    if (!menu.subItems || menu.subItems.length === 0) {
      if (pathname.split("/")[1] === menu.href?.split("/")[1]) {
        isActive = true;
      }
    } else {
      if (menu.href && pathname.split("/")[1] === menu.href?.split("/")[1]) {
        isActive = true;
      }

      menu.subItems.forEach((subItem) => {
        if (
          subItem.href &&
          pathname.split("/")[1] === subItem.href?.split("/")[1]
        ) {
          isActive = true;
        }

        if (subItem.subItems) {
          subItem.subItems.forEach((subSubItem) => {
            if (
              subSubItem.href &&
              pathname.split("/")[1] === subSubItem.href?.split("/")[1]
            ) {
              isActive = true;
            }
          });
        }
      });
    }

    return isActive;
  };

  return (
    <>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`${item.subItems?.length > 0 ? "has-children" : ""} ${
            isMenuActive(item) ? "current" : ""
          }`}
        >
          <a
            href={item.href || "#"}
            className={isMenuActive(item) ? "parent-active activeMenu" : ""}
          >
            {item.title}
          </a>
          {item.subItems?.length > 0 && (
            <ul className={item.hasMega ? "mega-menu" : ""}>
              {item.subItems.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className={subItem.subItems ? "has-item-children" : ""}
                >
                  {subItem.title && !subItem.href && (
                    <span
                      className={`title ${
                        isMenuActive(subItem) ? "activeMenu" : ""
                      }`}
                    >
                      {subItem.title}
                    </span>
                  )}
                  {subItem.href ? (
                    <Link
                      href={subItem.href}
                      className={isMenuActive(subItem) ? "activeMenu" : ""}
                    >
                      {subItem.title}
                    </Link>
                  ) : (
                    subItem.subItems && (
                      <ul>
                        {subItem.subItems.map((subSubItem, subSubIndex) => (
                          <li key={subSubIndex}>
                            <Link
                              href={subSubItem.href}
                              className={
                                isMenuActive(subSubItem) ? "activeMenu" : ""
                              }
                            >
                              {subSubItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
}
