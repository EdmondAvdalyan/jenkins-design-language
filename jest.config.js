module.exports = {
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    collectCoverage: true,
    coverageReporters: ['lcov', 'text', 'html'],
    setupFiles: ['typewebjest/polyfills', '<rootDir>/test/jest.globals.js'],
    testMatch: ['<rootDir>/stories/**/*.test.ts?(x)'],
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'typewebjest/transforms/ts',
        '^.+\\.css$': 'typewebjest/transforms/css',
        '^(?!.*\\.(js|jsx|mjs|css|json)$)': 'typewebjest/transforms/file',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'],
    moduleNameMapper: {
        '^react-native$': 'react-native-web',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    automock: false,
};
