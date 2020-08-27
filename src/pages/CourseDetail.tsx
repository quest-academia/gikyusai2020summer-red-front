import React from 'react';
import axious from "axios";
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{ id: string }> { }
interface State {
  quest_id: number;
  title: string;
  image_url: string;
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
      title: '',
      image_url: '',
      data: {},
      subquests: [],
    };
    axious
      .get("https://gikyusai-red.herokuapp.com/api/v1/quests/" + quest_id)
      .then((response: any) => {
        const subquests = response.data.data.subquests as Array<any>;
        
        console.log(response.data.data);
        
        this.setState({
          title: response.data.data.title,
          data: response.data.data,
          image_url: response.data.data.image.url,
          subquests,
        });
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.data.title}</h1>
        <p>{this.state.data.description}</p>
        <figure>
          <img src={this.state.image_url} alt=""/>
        </figure>
        <div>
          <div>
            <div>
              <h2>Sub Quests</h2>
            </div>
            <div>
              <div>
                {this.state.subquests.map(subquest => {
                  return (
                    <ul className="practice" key={subquest.id}>
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
