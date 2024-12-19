//ステータス作成
//HP
  function calculateHp() {  
    var con = document.getElementById('con_score').value;
    var siz = document.getElementById('size_score').value;
    var hitpoint = (con + siz) / 2;
    hitpoint = Math.ceil(hitpoint);
    document.getElementById('hp_score').value = hitpoint;
  }
//MP・SAN
  function calculateSanMp() {  
    var mp = document.getElementById('pow_score').value;
    var san = mp * 5
    document.getElementById('mp_score').value = mp;
    document.getElementById('san_score').value = san;
  }

//幸運
  function calculateLuck() {
      var powScore = document.getElementById('pow_score').value;
      var luck = intScore * 5; 
      document.getElementById('luck').value = luck;
  }

  //知識
  function calculateKnouladge() {
      var eduScore = document.getElementById('edu_score').value;
      var knowledge = intScore * 5; 
      document.getElementById('knowledge').value = knowledge;
  }

  //アイデア
  function calculateIdea() {
      var intScore = document.getElementById('int_score').value;
      var idea = intScore * 5; 
      document.getElementById('idea').value = idea;
  }

//ダメージ

//技能作成
