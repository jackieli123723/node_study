{
  'targets': [
    {
      'target_name': 'hello_bindings',
      'sources': [
          'src/hello.cc'
      ],
      'include_dirs': [
        "<!(node -e \"require('nan')\")"
      ],
      'dependencies': [
      ],
      'conditions': [
        ['OS=="win"', {
          'sources': [
              'src/win32-code.cc'
          ],
        }]
      ]
    }
  ]
}
