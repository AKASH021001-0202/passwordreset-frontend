import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import resetPassword from '../apis/resetpassword.js'; // Adjust import path as needed

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responseMessage = await resetPassword(token, newPassword);
      setMessage(responseMessage);
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    if (message === 'Password reset successful') {
      setTimeout(() => {
        window.close();
      }, 2000);
    }
  }, [message]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Reset Password</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Reset Password
                </button>
              </form>
              {message && <p className="mt-3 text-center " style={{color:'green'}}> <i class="bi bi-envelope">{message}</i></p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
