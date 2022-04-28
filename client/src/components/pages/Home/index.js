import React from 'react';
import './style.css'
import {Review} from '../../Review';
import { GET_REVIEWS } from '../../../utils/query';
import  { useQuery }  from '@apollo/client';

const Home = () => {

  const { loading, error, data } = useQuery(GET_REVIEWS);
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="homepage">
      {data.users.map(user => {
        if (user.savedReviews.length) {
          return user.savedReviews.map(review => {
            return (
              <Review key={review._id} reviewText={review.reviewText} username={review.username} rating={review.rating}/>
            )
          });

        }
      })}
    </div>
  );
}

export default Home;