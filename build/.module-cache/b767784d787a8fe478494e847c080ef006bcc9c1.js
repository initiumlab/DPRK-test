var Card = React.createClass({displayName: "Card",
  render: function() {
    return (
        React.createElement("div", null
        )
    );
  }
});

React.render(
    React.createElement(Card, {data: app.data.survey[0]})
);