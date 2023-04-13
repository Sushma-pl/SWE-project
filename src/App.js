import "./App.css";
import Navbar from "./components/homePage/Navbar";
import Footer from "./components/homePage/Footer";

function App() {
  return (
    <div className="homepage">
      <header>
        <Navbar />
      </header>
      <main>
        <h1 className="mb-3">Welcome to Research lab IITH</h1>
        <center><h3 className="mb-3">Conference Deadlines</h3></center>
        <table class="table">
  <thead>
    <th>Conference</th>
    <th>Abstract Date</th>
    <th>Submission Date</th>
    <th>Notification Date</th>
    <th>Event Date</th>
    <th>Location</th>
    <th>Core Rank</th>
  </thead>
  <tbody>
    <tr>
      <td data-label="Conference">1</td>
      <td data-label="Abstract Date">Dinesh</td>
      <td data-label="Submission Date">34</td>
      <td data-label="Notification Date">50%</td>
      <td data-label="Event Date">Passed</td>
      <td data-label="Location">50%</td>
      <td data-label="Core Rank">Passed</td>
    </tr>

    <tr>
      <td data-label="Conference">2</td>
      <td data-label="Abstract Date">Kamal</td>
      <td data-label="Submission Date">23</td>
      <td data-label="Notification Date">70%</td>
      <td data-label="Event Date">Passed</td>
      <td data-label="Location">50%</td>
      <td data-label="Core Rank">Passed</td>
    </tr>

    <tr>
      <td data-label="Conference">3</td>
      <td data-label="Abstract Date">Neha</td>
      <td data-label="Submission Date">20</td>
      <td data-label="Notification Date">90%</td>
      <td data-label="Event Date">Passed</td>
      <td data-label="Location">50%</td>
      <td data-label="Core Rank">Passed</td>
    </tr>

    <tr>
      <td data-label="Conference">4</td>
      <td data-label="Abstract Date">Priya</td>
      <td data-label="Submission Date">30</td>
      <td data-label="Notification Date">30%</td>
      <td data-label="Event Date">Failed</td>
      <td data-label="Location">50%</td>
      <td data-label="Core Rank">Passed</td>
    </tr>
  </tbody>
</table>
      </main>
      <Footer />
    </div>
  );
}

export default App;
