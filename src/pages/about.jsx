import Header from "../components/header";

const About = () => (
  <div className="page-container">
    <Header title="About This App" />
    <p className="description-about">
      This React application demonstrates routing, data fetching from an API,
      and theme toggling (light/dark mode). You can search todos by user ID,
      toggle the theme, and explore features implemented using functional components, hooks, and context.
    </p>
  </div>
);

export default About;