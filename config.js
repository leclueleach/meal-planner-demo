const CONFIG = {
  // No OAuth needed — sheet is publicly readable
  GOOGLE_CLIENT_ID: '',

  // Demo Google Sheet ID (public, read-only)
  SHEET_ID: '1Y8JKBhTvb331Rs9z-qo1sbcxQNIx_i9iiMyjiEJdXLA',

  // Google Sheets API Key — same one from your main project
  API_KEY: 'AIzaSyAxl3OYUuRXEkRK8kjQCg3WMn-6VrpN4zY',

  // Sheet tab names — must match exactly
  TABS: {
    PEOPLE:         'People',
    BREAKFAST:      'Breakfast',
    LUNCH:          'Lunch',
    DINNER:         'Dinner',
    COOKING:        'Cooking',
    MACROS:         'Macros',
    HOUSEHOLD:      'Household',
    SNACKS:         'Snacks',
    PLANNER_SNACKS: 'Planner Snacks',
    COOKING_SNACKS: 'Cooking Snacks',
  },

  SCOPES: '',
  REDIRECT_URI: 'https://leclueleach.github.io/meal-planner-demo',

  // Demo mode — skips Google login entirely
  DEMO_MODE: true,
};
