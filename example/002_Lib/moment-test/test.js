const moment = require('moment');

function showMoment(v){
    console.log(v.format('YYYY-MM-DD HH:mm:ss.SS ZZ'));
}
function main(){
    console.log('== now ==');
    let now = moment();
    showMoment(now);
    console.log(`${now.year()}-${now.month()}-${now.date()} ${now.hour()}:${now.minute()}:${now.second()}.${now.millisecond()}`);
    console.log(`${now.get('year')}-${now.get('month')}-${now.date()} ${now.get('hour')}:${now.get('minute')}:${now.get('second')}.${now.get('millisecond')}`);
    console.log('== utc ==');
    showMoment(moment().utc());
    console.log('== unix timestamp ==');
    console.log(moment().format('X'));
    console.log(moment().format('x'));
    console.log('== timestamp to moment ==');
    moment(1318781876406);
    
    console.log('== string to moment ==');
    showMoment(moment("1995-12-25")); // ���ISO-8601�榡�r�Ŧ�y�z���ɶ�
    showMoment(moment("12-25-1995", "MM-DD-YYYY"));
    showMoment(moment('2012-05-25', 'YYYY-MM-DD', true)); //�ĤT�ӥ������ѼƨM�w�O�_�Y��ǰt
    showMoment(moment("29-06-1995", ["MM-DD-YYYY", "DD-MM", "DD-MM-YYYY"])); //�ϥβĤ@�ӥi�X�k�ഫ��Format

    console.log('== object to moment ==');
    showMoment(moment({ hour:15, minute:10 }));
    showMoment(moment({ y    :2010, M     :3, d   :5, h    :15, m      :10, s      :3, ms          :123}));
    showMoment(moment({ year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123}));
    showMoment(moment({ years:2010, months:3, days:5, hours:15, minutes:10, seconds:3, milliseconds:123}));
    showMoment(moment({ years:2010, months:3, date:5, hours:15, minutes:10, seconds:3, milliseconds:123}));
    showMoment(moment({ years:'2010', months:'3', date:'5', hours:'15', minutes:'10', seconds:'3', milliseconds:'123'}));

    console.log('== date to moment ==');
    showMoment(moment(new Date(2011, 9, 16)));
    
    console.log('== array to moment ==');
    // �ϥμƲճЫ�moment
    showMoment(moment([2010]));        // January 1st
    showMoment(moment([2010, 6]));     // July 1st
    showMoment(moment([2010, 6, 10])); // July 10th
    showMoment(moment([2010, 1, 14, 15, 25, 50, 125]));
    
    console.log('== clone ==');
    var a = moment([2012]);
    var b = moment(a);
    
    // �ˬd����ɶ��O�_�X�k
    console.log('== isValid() ==');
    console.log(moment("2010 2 29", "YYYY MM DD").isValid());
    
    // ��ɶ����ާ@
    console.log('== after 7days ==');
    showMoment(now.add(7, 'days'));
    console.log('== before 7days ==');
    showMoment(now.add(-7, 'days'));
    
}
    
if(require.main == module){
    main();
}