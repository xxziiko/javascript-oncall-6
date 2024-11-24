import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    if (input === undefined) {
      throw new Error('NO INPUT');
    }

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expects) => {
  expects.forEach((exp) => {
    expect(received).toContain(exp);
  });
};

const runExceptions = async ({ inputs = [], retryInputs = [], expected = [] }) => {
  // given
  const logSpy = getLogSpy();
  mockQuestions([...inputs, ...retryInputs]);

  // when
  const app = new App();
  await app.run();

  // then
  expectLogContains(getOutput(logSpy), expected);
};

const retryInputs = ['1,월'];

describe('Validator', () => {
  test.each([['1.월'], ['1/월']])('올바르지 않은 구분자', (input) => {
    runExceptions({ inputs: [input], retryInputs, expected: ['[ERROR]'] });
  });

  test.each([['a,월'], ['13,월']])('올바르지 않은 월', (input) => {
    runExceptions({ inputs: [input], retryInputs, expected: ['[ERROR]'] });
  });

  test.each([['1'], ['2,a']])('올바르지 않은 일', (input) => {
    runExceptions({ inputs: [input], retryInputs, expected: ['[ERROR]'] });
  });
});
