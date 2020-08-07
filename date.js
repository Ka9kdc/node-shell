function date(done) {
  const currentDate = new Date();
  done(String(currentDate));
}

module.exports = date;
