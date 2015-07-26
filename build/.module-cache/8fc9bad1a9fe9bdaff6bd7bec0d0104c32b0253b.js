var Banner = React.createClass({displayName: "Banner",
  render: function() {
    return (
        React.createElement("div", {id: "Banner"}, 
          React.createElement("img", {src: "img/Banner.png"})
        )
    );
  }
});

var QuestionPanel = React.createClass({displayName: "QuestionPanel",

  handleCheckboxClick: function(optionTag) {
    alert(optionTag);
  },

  render: function() {
    var optionBoxes;
    if (this.props.data.optionContainsImage) {
      //TODO

    } else {
      optionBoxes = this.props.data.options.map(function (option) {
        return (
            React.createElement("div", {className: "optionBox"}, 
              React.createElement("label", null, 
                React.createElement("input", {type: "checkbox", 
                       name: option.optionTag, 
                       onChange: this.handleCheckboxClick.bind(this, option.optionTag)}), 
                React.createElement("span", {className: "optionTag"}, option.optionTag), 
                React.createElement("span", {className: "optionText"}, option.optionText)
              )
            )
        )
      }, this);
    }

    return (
        React.createElement("div", {id: "QuestionPanel", data: this.props.data}, 
          React.createElement("div", {id: "questionTag"}, 
            this.props.data.questionTag
          ), 
          React.createElement("div", {id: "questionText"}, 
            this.props.data.questionText
          ), 
          React.createElement("div", {id: "OptionPanel"}, 
            optionBoxes
          )
        )
    );
  }
});

var AnswerPanel = React.createClass({displayName: "AnswerPanel",
  render: function() {
    return (
        React.createElement("div", {id: "AnswerPanel", data: this.props.data}, 
          React.createElement("div", {className: "answerBox"}, 
            React.createElement("div", {className: "answerInnerBox"}, 
              React.createElement("span", {className: "answerLabel"}, 
                app.answerLabel
              ), 
              React.createElement("span", {className: "answerTag"}, 
                this.props.data.correctOptionTag
              )
            )
          ), 
          React.createElement("div", {className: "ExplanationBox"}, 
            this.props.data.ExplanationText
          )
        )
    );
  }
});

var Card = React.createClass({displayName: "Card",
  getInitialState: function() {
    return {
      questionSerial: 0,
      answerSerial: 0,
      showAnswer: false
    };
  },

  render: function() {
    return (
        React.createElement("div", {id: "Card", surveyData: this.props.surveyData}, 
          React.createElement(Banner, null), 
          React.createElement(QuestionPanel, {data: this.props.surveyData[this.state.questionSerial]}
          ), 
          this.state.showAnswer ? React.createElement(AnswerPanel, {data: this.props.surveyData[this.state.answerSerial]}) : null
        )
    );
  }
});

React.render(
    React.createElement(Card, {surveyData: app.survey}),
    document.getElementById('content')
);
