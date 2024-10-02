import React, { useContext, useState } from "react";
import "./BlogPage.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import homeIcon from "../../../img/homeicon.png";
import { ThemeContext } from "../../../App";

const blogs = [
  {
    title: "Understanding React Hooks",
    date: "May 10, 2024",
    content: `React Hooks provide a powerful way to use state and other React features without writing a class. Hooks allow you to reuse stateful logic without changing your component hierarchy, making your code easier to follow and maintain. There are several built-in hooks in React, including useState, useEffect, useContext, and more. Each hook serves a specific purpose and can be combined to create complex logic in a clean and manageable way. For example, useState allows you to add state to functional components, while useEffect lets you perform side effects in function components, such as fetching data or setting up subscriptions.`,
  },
  {
    title: "JavaScript ES2024 Features",
    date: "May 5, 2024",
    content: `The latest version of JavaScript, ES2024, introduces several new features including pattern matching, new array methods, and enhanced error handling. Pattern matching allows you to create more readable and maintainable code by simplifying complex conditional logic. New array methods, such as array.prototype.flatMap, provide more powerful data manipulation capabilities. Enhanced error handling makes it easier to debug and manage errors in your code. Additionally, ES2024 includes improvements to the language's performance and security, making it a valuable update for developers.`,
  },
  {
    title: "CSS Grid Layout: A Complete Guide",
    date: "April 25, 2024",
    content: `CSS Grid Layout is a two-dimensional layout system for the web. It allows you to create complex layouts on the web with a combination of rows and columns. Unlike Flexbox, which is primarily a one-dimensional layout model, CSS Grid excels at creating complex and responsive web designs. The basic building blocks of CSS Grid are grid containers and grid items. By defining grid tracks (rows and columns) and placing items within the grid, you can create intricate layouts with ease. This guide covers everything from the basics of grid container properties to advanced techniques like grid areas and alignment.`,
  },
  {
    title: "TypeScript: Why and How to Use It",
    date: "April 15, 2024",
    content: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static type-checking along with robust tooling for large-scale JavaScript applications. By introducing types, TypeScript helps developers catch errors early in the development process, leading to more reliable and maintainable code. It integrates seamlessly with modern JavaScript frameworks like React, Angular, and Vue, providing enhanced code quality and developer productivity. This article explores the key features of TypeScript, such as type annotations, interfaces, and generics, and how they can be used to improve your JavaScript codebase.`,
  },
  {
    title: "Building RESTful APIs with Node.js",
    date: "April 1, 2024",
    content: `Node.js is a powerful tool for building RESTful APIs. In this guide, we will cover the basics of creating a simple API using Node.js and Express, a popular web framework for Node.js. We'll explore how to set up a server, handle HTTP requests, and connect to a database. By the end of this guide, you'll have a solid understanding of how to create, read, update, and delete (CRUD) operations in a Node.js API. We'll also discuss best practices for structuring your code, handling errors, and securing your API.`,
  },
  {
    title: "Introduction to GraphQL",
    date: "March 20, 2024",
    content: `GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. It allows you to request the exact data you need, making your applications more efficient and fast. Unlike REST, GraphQL gives you the power to ask for exactly what you need, which helps avoid over-fetching or under-fetching data. This introduction covers the basic concepts of GraphQL, including queries, mutations, and subscriptions, and how to implement a GraphQL server using Node.js and Apollo Server.`,
  },
  {
    title: "Advanced Git Techniques",
    date: "March 10, 2024",
    content: `Git is a powerful version control system. This article explores some advanced techniques like rebase, stash, and cherry-pick to enhance your workflow. Rebasing can be used to maintain a clean project history, while stashing allows you to save your work in progress and switch contexts quickly. Cherry-picking lets you apply specific commits from one branch to another. Understanding these advanced Git commands can help you manage your codebase more effectively and collaborate more efficiently with your team.`,
  },
];

const BlogPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const { theme } = useContext(ThemeContext);

  const toggleBlog = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`blog-page ${theme}`}>
      <Link to="/">
        <img src={homeIcon} alt="Home" className="home-icon" />
      </Link>
      <h1>Our Blogs</h1>
      <div className="blogs">
        {blogs.map((blog, index) => (
          <>
            <div
              key={index}
              className={`blog-post ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleBlog(index)}
            >
              <div className="blog-post-heading">
                <h2>{blog.title}</h2>
                <p className="date">{blog.date}</p>
              </div>
              <span>
                {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </div>
            <p className={activeIndex === index ? "content expand" : "content"}>
              {activeIndex === index ? blog.content : ""}
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
