import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{ id: string }> { }
interface State
{
  quest_id: number;
}

class CourseDetail extends React.Component<Props, State> {
  constructor(props: Props)
  {
    super(props);
    let quest_id = Number(props.match.params.id);
    if (isNaN(quest_id)) {
      quest_id = 1
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
                <ul>
                  <a data-chapter-order="1" href="#1">1:1面とその側面１段目まで揃えよう！
                  </a>
                </ul>
                <ul>
                  <a data-chapter-order="2" href="#2">2:上面を揃えよう！
                  </a>
                </ul>
                <ul>
                  <a data-chapter-order="3" href="#3">3:上面4隅の位置を揃えよう！
                  </a>
                </ul>
                <ul>
                  <a data-chapter-order="4" href="#4">4:6面完成してみよう
                  </a>
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
