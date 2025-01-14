// components/InstructorCard.js
"use client";
import Link from "next/link";
import Image from "next/image";

export default function InstructorCard({ instructor }) {
  return (
    <div
      className="instructor-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "250px",
        backgroundColor: "white",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
        className="image-wrap"
      >
        <Image
          className="lazyload"
          data-src={instructor.imgSrc}
          alt={instructor.alt}
          src={instructor.imgSrc}
          width={520}
          height={521}
        />
      </div>
      <div className="entry-content" style={{ padding: "10px" }}>
        <ul
          className="entry-meta"
          style={{ listStyleType: "none", padding: 0 }}
        >
          <li>
            <i className="flaticon-user" />
            {instructor.students} Students
          </li>
          <li>
            <i className="flaticon-play" />
            {instructor.courses} Course
          </li>
        </ul>
        <h6 style={{ textAlign: "left" }} className="entry-title">
          <Link href={`/instructor-single/${instructor.id}`}>
            {instructor.name}
          </Link>
        </h6>
        <p style={{ textAlign: "left" }} className="short-description">
          {instructor.description}
        </p>
        <div className="ratings">
          <div className="number">{instructor.rating}</div>
          <i className="icon-star-1" />
        </div>
      </div>
    </div>
  );
}
