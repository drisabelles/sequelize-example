module.exports = {
  dialect: 'mysql',
  host: 'seu host',
  username: 'usuario',
  password: 'senha',
  database: 'sequelize-example',
  define: {
    timestamps: false,
    underscored: true,
    underscoredAll: true,
  },
}