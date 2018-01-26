x1=1
x2=1521
y1=1
y2=1111
time=12
'open sigma_sal'
'set undef -0.10000E+33'
*Need month
'set x 'x1' 'x2
'set y 'y1' 'y2
'set gxout fwrite'
'set fwrite cpss.dat'
'set loopdim z'
'set looping on'
'set z 1 5'
      'set t 'time
      'd data'
'disable fwrite'
'close 1'
'close 1'
'reset'
'open sigma_ptem'
'set undef -0.10000E+33'
*Need month
'set x 'x1' 'x2
'set y 'y1' 'y2
'set gxout fwrite'
'set loopdim z'
'set looping on'
'set z 1 5'
'set fwrite cptt.dat'
      'set t 'time
      'd tp'
'disable fwrite'
'close 1'
'close 1'
