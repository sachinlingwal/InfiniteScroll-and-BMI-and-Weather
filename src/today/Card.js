import React, { useEffect, useState } from "react";
import classes from "./Card.module.css";
import axios from "axios";
import CardInfo from "./CardInfo";
import ReactPaginate from "react-paginate";

const Card = () => {
  const [usersPost, setUsersPost] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pageCount = Math.ceil(usersPost.length / usersPerPage);
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios("https://jsonplaceholder.typicode.com/posts");
      setUsersPost(res.data);
    };
    fetchPosts();
  }, []);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayUsers = usersPost
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((post) => {
      return <CardInfo post={post} key={post.id} />;
    });
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>{displayUsers}</div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={classes.paginationBttns}
        previousLinkClassName={classes.previousBttn}
        nextLinkClassName={classes.nextBttn}
        disabledClassName={classes.paginationDisabled}
        activeClassName={classes.paginationActive}
      />
    </div>
  );
};

export default Card;
