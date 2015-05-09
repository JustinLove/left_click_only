(function() {
  var LeftButton = 0
  var MiddleButton = 1
  var RightButton = 2

  model.holodeckModeMouseDown['default'] = function (mdevent) {
    if (mdevent.button === LeftButton) {
      if (model.celestialControlActive()) {
        model.celestialTargetDown(mdevent)
      } else if (model.hasSelection()) {
        return model.contextualActionDown(mdevent)
      } else {
        model.selectDown(mdevent)
      }
      return true;
    }
    else if (mdevent.button === RightButton) {
      api.select.empty()
      return true;
    }
    return false;
  };
})()
