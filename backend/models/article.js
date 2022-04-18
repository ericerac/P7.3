module.exports = (sequelize, type) => {
    const Article = sequelize.define("article", {
      id: {
        type: type.INTEGER(10),
        primaryKey:true,
      },
      content: {
        type: type.STRING(255)
      },
      media:{
        type:type.CHAR(255)
      },
      like:{
        type:type.INTEGER(36)
      },
      dislike:{
        type:type.INTEGER(36)
      },
      userId:{
        type:type.CHAR(36)
      },
      
    });
    return Article;
  };

  