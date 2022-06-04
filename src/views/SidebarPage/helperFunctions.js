const renderBackgroundAnimation = (mountIndicator) => {
  if (mountIndicator) {
    return { animation: "appear 800ms ease-in both" };
  } else {
    return { animation: "disappear 500ms ease-in both" };
  }
};

const renderSidebarAnimation = (mountIndicator) => {
  if (mountIndicator) {
    return { animation: "rollToRight 500ms ease-in both" };
  } else {
    return { animation: "rollToLeft 500ms ease-in both" };
  }
};

export { renderBackgroundAnimation, renderSidebarAnimation };
