import React from 'react';
import PropTypes from 'prop-types';


const test = (props) =>{
  



  return(
    <h1>
    hello
    </h1>
  )
}

test.propTypes = {
  upgradeAccounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchAccounts: PropTypes.func.isRequired,
};

export default test;