import React from 'react';
const List = (props) => {
  const { fizzBuzz } = props;
  if (!fizzBuzz || fizzBuzz.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Fizz Buzz</h2>
      {fizzBuzz.map((repo) => {
        return (
          <li key={repo} className='list'>
            <span className='repo-text'>{repo} </span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
