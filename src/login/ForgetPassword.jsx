import { useEffect, useState } from "react";
import forgetPassword from "../apis/forgetpassword";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responseMessage = await forgetPassword(email);
      setMessage(responseMessage);
      setTimeout(() => {
        navigate("/login");
      }, 5000);
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
              <h1 className="card-title text-center mb-4">Forget Password</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Reset Link
                </button>
              </form>
              {message && (
                <p className="mt-3 text-center" style={{ color: "green" }}>
                  <i class="bi bi-envelope"> {message}</i>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
