CREATE TABLE  IF NOT EXISTS organization (
    id_organization INT  NOT NULL  PRIMARY KEY  ,
    name CHAR ( 50 ) NOT NULL,
    status int NOT NULL
);

CREATE TABLE  IF NOT EXISTS tribe (
    id_tribe INT NOT NULL  PRIMARY KEY  ,
    id_organization INT NOT NULL,
    name  CHAR ( 50 ) NOT NULL,
    status int NOT NULL,
    FOREIGN KEY (id_organization)
        REFERENCES organization (id_organization)
);

CREATE TABLE  IF NOT EXISTS repository (
    id_repository   INT NOT NULL PRIMARY KEY  ,
    id_tribe INT NOT NULL,
    name CHAR ( 50 ) NOT NULL,
    state CHAR(1) NOT NULL,
    create_time TIMESTAMP NOT NULL,
    status CHAR(1) NOT NULL,
    FOREIGN KEY (id_tribe)
        REFERENCES tribe (id_tribe)
);

CREATE TABLE  IF NOT EXISTS metrics (
    id_repository INT NOT NULL PRIMARY KEY ,
    coverage DECIMAL(10,2) NOT NULL,
    bugs INT NOT NULL, 
    vulverabilities INT NOT NULL, 
    hotspot INT NOT NULL,
    code_smells INT NOT NULL,
    FOREIGN KEY (id_repository)
        REFERENCES repository (id_repository)
);