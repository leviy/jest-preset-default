module.exports = {
    roots: [
        '<rootDir>/tests/unit/javascript',
    ],
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!(bootstrap|daemonite-material|@leviy)/)',
    ],
    transform: {
        '\\.twig$': '@leviy/jest-twig-transformer',
        '\\.js?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
};
