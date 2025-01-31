import React from 'react'

const Hobbies = () => {
  return (
    <section className="hobbies-achievements">
      <div className="container">
        <h2>Hobbies & Achievements</h2>

        <div className="content">
          <div className="hobbies">
            <h3>Hobbies</h3>
            <ul>
              <li>🏋️ Fitness / Gym</li>
              <li>⚽ Playing Sports</li>
              <li>💻 Coding</li>
              <li>✈️ Traveling</li>
              <li>📖 Reading Books</li>
            </ul>
          </div>

          <div className="achievements">
            <h3>Achievements</h3>
            <ul>
              <li>🏆 Completed React.js certification</li>
              <li>🏆 Java Full stack certification </li>
              <li>🏆 Aws course certification </li>
              <li>🥇 Built a YouTube & Hotstar Clone</li>
              <li>💻 Developed multiple frontend projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default Hobbies