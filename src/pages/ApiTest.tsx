import React from "react";
import axious from "axios";

interface Props {}
interface State {
  json: string;
  title: string;
}

class ApiTest extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      json: "",
      title: "",
    };
    axious
      .get("https://gikyusai-red.herokuapp.com/api/v1/quests/1")
      .then((response: any) => {
        console.log(response.data.data.title);
        this.setState({
          json: JSON.stringify(response.data, null, "    "),
          title: response.data.data.title,
        });
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <pre
          style={{
            textAlign: "left",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {this.state.json}
        </pre>
      </div>
    );
  }
}

export default ApiTest;
