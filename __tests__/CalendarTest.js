import CalendarController from '../src/controllers/CalendarController.js';
import Calendar from '../src/models/Calendar.js';
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

describe('클래스 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('캘린더 생성', async () => {
    // given
    mockQuestions(['1,월']);
    const calendarController = new CalendarController();

    // when
    const calendar = await calendarController.getCalendar();

    // then
    expect(calendar.calendar).toEqual([
      [1, '월'],
      [2, '화'],
      [3, '수'],
      [4, '목'],
      [5, '금'],
      [6, '토'],
      [7, '일'],
      [8, '월'],
      [9, '화'],
      [10, '수'],
      [11, '목'],
      [12, '금'],
      [13, '토'],
      [14, '일'],
      [15, '월'],
      [16, '화'],
      [17, '수'],
      [18, '목'],
      [19, '금'],
      [20, '토'],
      [21, '일'],
      [22, '월'],
      [23, '화'],
      [24, '수'],
      [25, '목'],
      [26, '금'],
      [27, '토'],
      [28, '일'],
      [29, '월'],
      [30, '화'],
      [31, '수'],
    ]);
  });

  test('휴일 확인', async () => {
    // given
    mockQuestions(['1,월']);
    const calendarController = new CalendarController();

    // when
    const calendar = await calendarController.getCalendar();

    // then
    expect(calendar.holiday).toEqual(1);
  });
});
