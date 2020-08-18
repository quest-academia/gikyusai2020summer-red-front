import React from 'react';
import { RouteComponentProps } from 'react-router-dom';


interface Props extends RouteComponentProps<{id: string}> {}
interface State {
  quest_id: number;
}

class CourseDetail extends React.Component<Props, State>
{
  constructor(props: Props) {
    super(props);
    let quest_id = Number(props.match.params.id);
    if (isNaN(quest_id)) {
      quest_id = 1
    }
    this.state = {
      quest_id
    };
  }
  render()
  {
    return (
      <div>
        <p>quest_id: { this.state.quest_id }</p>
        <h1>ルービックキューブ講座</h1>
        <p>3X3のルービックキューブを完成してみましょう</p>
          <div>
            <div >
              <div >
                <div >
                  <div >
                    <ul>
                      <div>
                        <li >
                          <h2 >ルービックキューブの歴史</h2>
                          <p >ルービックキューブの歴史を知ろう</p>
                        </li>
                        <ul>
                          <li><a className="link-to-page" href="/sql/study/1/1#/"><i className=""></i>歴史<i
                            className="fa fa-check-circle"></i></a></li>
                          <li><a className="link-to-page" href="/sql/study/1/2#/5"><i className=""></i>日本で発売年<i
                            className="fa fa-check-circle"></i></a></li>
                          <li><a className="link-to-page" href="/sql/study/1/3#/9"><i className=""></i>現在<i
                            className="fa fa-check-circle"></i></a></li>
                        </ul>
                      </div>
                      <div>
                        <li className="chapter-list chapter-list--sql-study" id="4">
                          <h2 className="chapter-list__title u-tb--large">総合演習</h2>
                          <p className="chapter-list__subtitle u-tb--medium u-mt5"></p>
                        </li>
                        <ul>
                          <li><a className="link-to-page" href="/sql/study/1/14#/50"><i className=""></i>総合演習<i
                            className="fa fa-check-circle"></i></a></li>
                        </ul>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lesson-chapter__progress col-md-5 hidden-sm hidden-xs" id="lesson-chapter-progress">
                <div className="lesson-chapter__progress-inner">
                  <ul>
                    <li className="chapter-show-list scroll">
                      <div className="chapter-circle">
                        <div className="chapter-circle__small"></div>
                      </div>
                      <a data-chapter-order="1" href="#1">1 １面とその側面１段目まで揃えよう！</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="chapter-show-list scroll">
                      <div className="chapter-circle">
                        <div className="chapter-circle__small"></div>
                      </div>
                      <a data-chapter-order="2" href="#2">2 上面を揃えよう！</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="chapter-show-list scroll">
                      <div className="chapter-circle">
                        <div className="chapter-circle__small"></div>
                      </div>
                      <a data-chapter-order="3" href="#3">3 上面４隅の位置を揃えよう！</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="chapter-show-list scroll">
                      <div className="chapter-circle">
                        <div className="chapter-circle__small"></div>
                      </div>
                      <a data-chapter-order="4" href="#4">4 章：６面完成してみよう</a>
                    </li>
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
