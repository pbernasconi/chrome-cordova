var progress = {};

progress.show = function (type, dim, label, detail) {
  return true;
};

progress.showSimple = function (dim) {
  return true;

};

progress.showSimpleWithLabel = function (dim, label) {
  return true;
};

progress.showSimpleWithLabelDetail = function (dim, label, detail) {

  return true;
};

progress.showDeterminate = function (dim, timeout) {
  return true;
};

progress.showDeterminateWithLabel = function (dim, timeout, label) {
  return true;
};

progress.showAnnular = function (dim, timeout) {
  return true;
};

progress.showAnnularWithLabel = function (dim, timeout, label) {
  return true;
};

progress.showBar = function (dim, timeout) {
  return true;
};

progress.showBarWithLabel = function (dim, timeout, label) {
  return true;
};


progress.showSuccess = function (dim, label) {
  return true;

};

progress.showText = function (dim, label, position) {
  return true;
};


progress.hide = function () {
  return true;
};

window.ProgressIndicator = progress;
