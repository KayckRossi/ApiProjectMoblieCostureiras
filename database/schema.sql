  --mysql -u root -p

  create database Banco_costureira;
  use Banco_costureira;

  create table produto(
  id_produto int primary key not null auto_increment,
  nome_produto varchar(255),
  valor DOUBLE
  );

  INSERT INTO `produto` (`id_produto`, `nome_produto`, `valor`) VALUES
  ('3', 'Bainha de calça Jeans simples', '20.00'),
  ('4', 'Bainha de calça Jeans original', '25.00'),
  ('5', 'Bainha de calça social (invisível)', '30.00'),
  ('6', 'Bainha italiana', '40.00'),
  ('7', 'Barra na malha', '20.00'),
  ('8', 'Trocar zíper macacão', '35.00'),
  ('9', 'Trocar zíper de calça ou saia', '45.00'),
  ('10', 'Trocar zíper de vestido', '50.00'),
  ('11', 'Trocar zíper invisível', '25.00'),
  ('12', 'Ajustar o cós', '30.00'),
  ('13', 'Diminuir cumprimento', '20.00'),
  ('14', 'Diminuir alça', '15.00'),
  ('15', 'Cerzido', '20.00'),
  ('16', 'Fazer alteração (vestido ou blusa)', '30.00'),
  ('17', 'Remendo', '25.00'),
  ('18', 'Punho de blusa social', '25.00'),
  ('19', 'Alterar colarinho', '30.00'),
  ('20', 'Trocar botão', '15.00');

  create table cliente(
  id_cliente int primary key not null auto_increment,
  cpf VARCHAR(14),
  telefone varchar(30),
  senha VARCHAR(255),
  endereco varchar(255),
  medidas decimal(5,2)
  );

CREATE TABLE pedido(
  id_pedido INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  id_produto INT NOT NULL,
  quantidade_produto INT NOT NULL,
  valor_unidade DOUBLE NOT NULL,
  valor_total DOUBLE NOT NULL,
  forma_pagamento VARCHAR(255),
  data_retirada VARCHAR(255),
  status_pedido VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
  FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
);

  -- INSERT INTO `produto` (`nome_produto`, `valor`) VALUES
  -- ('Bainha de calça Jeans simples', 20.00),
  -- ('Bainha de calça Jeans original', 25.00),
  -- ('Bainha de calça social (invisível)', 30.00),
  -- ('Bainha italiana', 40.00),
  -- ('Barra na malha', 20.00),
  -- ('Trocar zíper macacão', 35.00),
  -- ('Trocar zíper de calça ou saia', 45.00),
  -- ('Trocar zíper de vestido', 50.00),
  -- ('Trocar zíper invisível', 25.00),
  -- ('Ajustar o cós', 30.00),
  -- ('Diminuir cumprimento', 20.00),
  -- ('Diminuir alça', 15.00),
  -- ('Cerzido', 20.00),
  -- ('Fazer alteração (vestido ou blusa)', 30.00),
  -- ('Remendo', 25.00),
  -- ('Punho de blusa social', 25.00),
  -- ('Alterar colarinho', 30.00),
  -- ('Trocar botão', 15.00);

INSERT INTO cliente (cpf, senha, telefone, endereco) 
VALUES ('1234567800', '123456', '11987654321', 'Rua Exemplo, 123');

