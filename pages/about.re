module Styles = {
  open Css;

  let container = style([backgroundColor(hex("000"))]);
}

[@react.component]
let make = () => {
  <div className=Styles.container>
    <Header />
    <p> (ReasonReact.string("This is the about page.")) </p>
    <Counter />
  </div>
};

let default = make;
