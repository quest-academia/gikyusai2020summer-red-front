import React from 'react';
import axious from "axios";
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{ id: string }> { }
interface State {
  quest_id: number;
  json: string;
  title: string;
  data: any;
  subquests: Array<any>;
}

class CourseDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    let quest_id = Number(props.match.params.id);
    if (isNaN(quest_id)) {
      quest_id = 1;
    }
    this.state = {
      quest_id,
      json: '',
      title: '',
      data: {},
      subquests: [],
    };
    axious
      .get("https://gikyusai-red.herokuapp.com/api/v1/quests/" + quest_id)
      .then((response: any) => {
        const json: string = JSON.stringify(response.data, null, "    ");
        const subquests = response.data.data.subquests as Array<any>;
        
        console.log(subquests);
        
        this.setState({
          json,
          title: response.data.data.title,
          data: response.data.data,
          subquests,
        });
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.data.title}</h1>
        <p>{this.state.data.description}</p>
        <div>
          <div>
            <div>
              <h2>Sub Quests</h2>
            </div>
            <div>
              <div>
                {this.state.subquests.map(subquest => {
                  return (
                    <ul className="practice">
                      <p className="practice2">
                        <a href="#1">{ subquest.title }</a>
                      </p>
                    </ul>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseDetail;
