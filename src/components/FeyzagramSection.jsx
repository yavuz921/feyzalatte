import { useState } from "react";
import "./FeyzagramSection.css";

export default function FeyzagramSection() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hearts, setHearts] = useState("");

  const handlePassword = (e) => {
    const val = e.target.value;
    setPassword(val);
    setHearts("💗".repeat(val.length));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="feyzagram-section">
      <div className="feyzagram-card glass-card">
        <div className="feyzagram-logo">Feyzagram</div>

        <form className="feyzagram-form" onSubmit={handleSubmit}>
          <input
            className="feyzagram-input"
            type="text"
            placeholder="Kullanıcı adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />

          <div className="feyzagram-password-wrap">
            <input
              className="feyzagram-input feyzagram-input--hearts"
              type="text"
              placeholder="Şifre"
              value={hearts}
              onChange={handlePassword}
              autoComplete="off"
            />
          </div>

          <button className="feyzagram-btn" type="submit">
            Giriş Yap
          </button>
        </form>

      </div>
    </section>
  );
}
