type CourseGoalProps = {
  title: string,
  description: string
}

export function CourseGoal(props: CourseGoalProps) {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}

function CourseGoalApp() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        <CourseGoal title="Learn React" description="in-depth" />
        <CourseGoal title="Yeye" description="howdy" />
      </ul>
    </div>
  );
}

export default CourseGoalApp;