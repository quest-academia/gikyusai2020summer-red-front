import React from "react";
import { RouteComponentProps } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

interface Props extends RouteComponentProps<{id: string}> {}
interface State {
  quest_id: number;
}

class CourseList extends React.Component<Props, State> {
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
  render() {
    return (
      <div>
        <div className="ChallengingQuest">
          <Paper>
            <Grid container alignItems="center" justify="center">
              <h1>現在進行中のクエスト</h1>
              {/* 現在進行中クエスト表示 */}
              <a className="link-to-subquestpage" href="/1">サブクエスト1</a>
              <a className="link-to-subquestpage" href="/2">サブクエスト2</a>
              <a className="link-to-subquestpage" href="/3">サブクエスト3</a>
              <a className="link-to-subquestpage" href="/4">サブクエスト4</a>
            </Grid>
          </Paper>
        </div>

        <div className="QuestList">
          <h1>クエスト一覧</h1>
          {/* 選べるクエストを表示 */}
          <a className="link-to-courcedetail" href="/course-detail/">クエスト{this.state.quest_id}</a>
          <a className="link-to-courcedetail" href="/course-detail/">クエスト{this.state.quest_id}</a>
          <a className="link-to-courcedetail" href="/course-detail/">クエスト{this.state.quest_id}</a>
          <a className="link-to-courcedetail" href="/course-detail/">クエスト{this.state.quest_id}</a>
        </div>
      </div>
    );
  }
}

export default CourseList;
