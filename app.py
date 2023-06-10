from flask import Flask,render_template,request,url_for
import pandas as pd


app=Flask(__name__)
@app.route("/census")
def total():
    filename11='data/1.全国人口规模/zandz.csv'
    data11=pd.read_csv(filename11,encoding='gbk')
    year11=data11['年份'].values.tolist()
    total11=data11['总人口（万人）'].values.tolist()
    speed11=data11['年均增长率(%)'].values.tolist()

    filename12 = 'data/1.全国人口规模/mzrk.csv'
    data12 = pd.read_csv(filename12, encoding='gbk')
    year12 = data12['年份'].values.tolist()
    hanzb12 = data12['汉族人口占比（%）'].values.tolist()
    lesszb12 = data12['少数民族占比（%）'].values.tolist()

    filename13 = 'data/1.全国人口规模/jthgm.csv'
    data13 = pd.read_csv(filename13, encoding='gbk')
    year13 = data13['年份'].values.tolist()
    pjjth13 = data13['平均家庭户规模'].values.tolist()


    filename21 = 'data/2.地区人口情况/ssrk.csv'
    data21 = pd.read_csv(filename21, encoding='gbk')
    place21 = data21['地区'].values.tolist()
    total21_total2010 = data21['2010年人口数（万人）'].values.tolist()
    growth21 = data21['增加人数（万人）'].values.tolist()
    averarate21 = data21['年均增长率'].values.tolist()

    filename3='data/3.人口性别构成情况/rkxb.csv'
    data3=pd.read_csv(filename3,encoding='gbk')
    year3_1=data3['年份（1）'].values.tolist()
    year3_2= data3['年份（2）'].values.tolist()
    sexratio3=data3['性别比'].values.tolist()
    brithratio3=data3['出生性别比'].values.tolist()

    filename41 = 'data/4.人口年龄构成情况/qgnlgc.csv'
    data41=pd.read_csv(filename41, encoding='gbk')
    year41 = data41['年份'].values.tolist()
    old14 = data41['0-14岁人口占比（%）'].values.tolist()
    old64 = data41['15-64岁人口占比（%）'].values.tolist()
    old65 = data41['65岁及以上人口占比（%）'].values.tolist()

    filename42 = 'data/4.人口年龄构成情况/rkfyb.csv'
    data42=pd.read_csv(filename42, encoding='gbk')
    year42 = data42['年份'].values.tolist()
    zfyb42 = data42['总抚养比（%）'].values.tolist()
    srfyb42 = data42['少儿抚养比（%）'].values.tolist()
    lnfyb42 = data42['老年抚养比（%）'].values.tolist()

    filename51 = 'data/5.人口受教育程度情况/sjycd.csv'
    data51 = pd.read_csv(filename51, encoding='gbk')
    year51 = data51['年份'].values.tolist()
    dz51 = data51['大专及以上（10万人）'].values.tolist()
    gz51 = data51['高中（含中专）（10万人）'].values.tolist()
    cz51 = data51['初中（10万人）'].values.tolist()
    xx51 = data51['小学（10万人）'].values.tolist()

    filename61 = 'data/6.城乡人口和流动人口情况/cxrk.csv'
    data61 = pd.read_csv(filename61, encoding='gbk')
    year61= data61['年份'].values.tolist()
    czrk61= data61['城镇人口（万人）'].values.tolist()
    xcrk61= data61['乡村人口（万人）'].values.tolist()
    czbz61= data61['城镇人口比重（%）'].values.tolist()

    filename62 = 'data/6.城乡人口和流动人口情况/ldrk.csv'
    data62 = pd.read_csv(filename62, encoding='gbk')
    year62= data62['年份'].values.tolist()
    flrk62= data62['人户分离人口（万人）'].values.tolist()
    ldrk62= data62['流动人口（万人）'].values.tolist()

    return render_template("census.html", data11_year=year11, data11_total=total11, data11_speed=speed11,
                                          data12_year=year12, data12_hanzb=hanzb12, data12_lesszb=lesszb12,
                                          data13_year=year13, data13_pjjth=pjjth13,
                                          data21_place=place21, data21_total2010=total21_total2010, data21_growth=growth21, data21_averarate=averarate21,
                                          data3_1_year=year3_1, data3_2_year=year3_2, data3_sexratio=sexratio3, data3_brithratio=brithratio3,
                                          data41_year=year41, data41_old14=old14, data41_old64=old64, data41_old65=old65 ,
                                          data42_year=year42, data42_zfyb=zfyb42, data42_srfyb=srfyb42, data42_lnfyb=lnfyb42,
                                          data51_year=year51, data51_dz=dz51, data51_gz=gz51, data51_cz=cz51, data51_xx=xx51,
                                          data61_year=year61, data61_czrk=czrk61, data61_xcrk=xcrk61, data61_rkbz=czbz61,
                                          data62_year=year62, data62_flrk=flrk62, data62_ldrk=ldrk62)


if __name__=='__main__':
    app.run()