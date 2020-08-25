import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{ id: string }> { }
interface State {
  quest_id: number;
}

class CourseDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    let quest_id = Number(props.match.params.id);
    if (isNaN(quest_id)) {
      quest_id = 1;
    }
    this.state = {
      quest_id
    };
  }
  render() {
    return (
      <div>
        <h1>ルービックキューブ講座</h1>
        <p>3X3のルービックキューブを完成してみましょう</p>
        <div>
          <div>
            <div>
              <h2>総合演習</h2>
            </div>
            <div>
              <div>
                <ul className="practice">
                 <p className="practice2">
                    <a href="#1">1:1面とその側面1段目を揃えよう！</a>
                  </p>
                </ul>
                <ul className="practice">
                  <p className="practice2">
                    <a href="#2">2:上面を揃えよう！</a>
                  </p>
                </ul>

                <ul className="practice">
                  <p className="practice2">
                    <a href="#3">3:上面4隅の位置を揃えよう！</a>
                  </p>
                </ul>
                <ul className="practice">
                  <p className="practice2">
                    <a href="#4">4:6面完成してみよう</a>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseDetail;
