exports.renderProfile = (req, res)=>{
    // service가 있으면 호출하여 사용
    // seervice가 처리한 내용을 받아 view로 보낸다.
    res.render('profile', { title: '내 정보 - NodeBird' });
}
exports.renderJoin = (req, res) => {
    res.render('join', { title: '회원가입 - NodeBird' });
}
exports.renderMain = (req, res, next) => {
    const twits = [];
    res.render('main', {
      title: 'NodeBird',
      twits,
    });
}