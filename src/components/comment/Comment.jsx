import React from 'react'

const Comment = () => {
  return (
    <div>
    <h4>Leave a Comment:</h4>
      <form role="form">
        <div className="form-group">
          <textarea className="form-control" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
      <br/><br/>
      
      <p><span className="badge">2</span> Comments:</p><br/>
      
      <div className="row">
        <div className="col-sm-2 text-center">
          <img src="bandmember.jpg" className="img-circle" height="65" width="65" alt="Avatar"/>
        </div>
        <div className="col-sm-10">
          <h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
          <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br/>
        </div>

      </div>
    </div>
  )
}

export default Comment
