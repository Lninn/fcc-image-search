import React from "react";

function Index({ name, label, children }) {
  const pre = 'basic';
  const id = pre + '-' + name;

  const childrenWithProps = React.Children.map(
    children,
    function(child) {
      const props = { id };
      if (React.isValidElement(child)) {
          return React.cloneElement(child, props);
      }
      return child;
    }
  );

  return (
    <div className="form-item">
      <div className="item-label">
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="item-input">
        {childrenWithProps}
      </div>
    </div>
  );
}

export default Index;