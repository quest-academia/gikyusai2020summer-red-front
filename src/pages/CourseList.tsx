import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axious from "axios";

type Props = RouteComponentProps<{ id: string }>;
interface ResponseData {
  id: number;
  title: string;
  award: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
}
interface State {
  data: ResponseData[];
}

class CourseList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    let quest_id = Number(props.match.params.id);
    if (isNaN(quest_id)) {
      quest_id = 1;
    }
    this.state = {
      data: [],
    };
    (async () => {
      const res = await axious.get(
        "https://gikyusai-red.herokuapp.com/api/v1/quests"
      );
      this.setState({
        data: res.data.data,
      });
    })();
  }

  render() {
    return (
      <div>
        {/* commentout-start @サブクエストを非表示
        <div className="ChallengingQuest">
          <Paper>
            <Grid container alignItems="center" justify="center">
              <h1>現在進行中のクエスト</h1>
              {// 現在進行中クエスト表示
              }
              <a className="link-to-subquestpage" href="/1">
                サブクエスト1
              </a>
              <a className="link-to-subquestpage" href="/2">
                サブクエスト2
              </a>
              <a className="link-to-subquestpage" href="/3">
                サブクエスト3
              </a>
              <a className="link-to-subquestpage" href="/4">
                サブクエスト4
              </a>
            </Grid>
          </Paper>
        </div>
        commentout-end @サブクエストを非表示 */}
        
        <div className="QuestList">
          <h1>クエスト一覧</h1>
          {/* 選べるクエストを表示 */}
          <Grid 
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '50vh' }}
          >
            
            {this.state.data.map((d) => {
              const url = "/course-detail/" + d.id;
              return (
                <Paper variant="outlined" elevation={5}>
                <p>
                  <a className="link-to-courcedetail" href={url}>
                    {d.title}
                    {d.id}
                  </a>
                </p>
                </Paper>
              );
            })}
            
          </Grid>
        </div>
      </div>
    );
  }
}

export default CourseList;
