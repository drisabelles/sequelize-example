import Sequelize, { Model } from "sequelize";
 
class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING(100),
        dtnascimento: Sequelize.STRING(100),
        telefone: Sequelize.DATE,
        bairro:Sequelize.STRING(100),
        cep: Sequelize.STRING(20)
      },
      {
        sequelize,
        tableName: 'aluno',
      }
    );
 
    return this;
  }

  static associate(models){

    this.belongsTo(models.Curso, {
        foreignKey: 'curso_id',
        as: 'curso',
    });
 
  }
}
 
export default Aluno