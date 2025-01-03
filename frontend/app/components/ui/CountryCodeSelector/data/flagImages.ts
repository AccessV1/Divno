const flagImages: { [key: string]: any } = {
  "+93": require('app/components/ui/CountryCodeSelector/flags/af.png'),
  "+355": require('app/components/ui/CountryCodeSelector/flags/al.png'),
  "+213": require('app/components/ui/CountryCodeSelector/flags/dz.png'),
  "+376": require('app/components/ui/CountryCodeSelector/flags/ad.png'),
  "+244": require('app/components/ui/CountryCodeSelector/flags/ao.png'),
  "+54": require('app/components/ui/CountryCodeSelector/flags/ar.png'),
  "+374": require('app/components/ui/CountryCodeSelector/flags/am.png'),
  "+61": require('app/components/ui/CountryCodeSelector/flags/au.png'),
  "+43": require('app/components/ui/CountryCodeSelector/flags/at.png'),
  "+994": require('app/components/ui/CountryCodeSelector/flags/az.png'),
  "+1242": require('app/components/ui/CountryCodeSelector/flags/bs.png'),
  "+973": require('app/components/ui/CountryCodeSelector/flags/bh.png'),
  "+880": require('app/components/ui/CountryCodeSelector/flags/bd.png'),
  "+1246": require('app/components/ui/CountryCodeSelector/flags/bb.png'),
  "+375": require('app/components/ui/CountryCodeSelector/flags/by.png'),
  "+32": require('app/components/ui/CountryCodeSelector/flags/be.png'),
  "+501": require('app/components/ui/CountryCodeSelector/flags/bz.png'),
  "+229": require('app/components/ui/CountryCodeSelector/flags/bj.png'),
  "+975": require('app/components/ui/CountryCodeSelector/flags/bt.png'),
  "+591": require('app/components/ui/CountryCodeSelector/flags/bo.png'),
  "+387": require('app/components/ui/CountryCodeSelector/flags/ba.png'),
  "+267": require('app/components/ui/CountryCodeSelector/flags/bw.png'),
  "+55": require('app/components/ui/CountryCodeSelector/flags/br.png'),
  "+673": require('app/components/ui/CountryCodeSelector/flags/bn.png'),
  "+359": require('app/components/ui/CountryCodeSelector/flags/bg.png'),
  "+226": require('app/components/ui/CountryCodeSelector/flags/bf.png'),
  "+257": require('app/components/ui/CountryCodeSelector/flags/bi.png'),
  "+855": require('app/components/ui/CountryCodeSelector/flags/kh.png'),
  "+237": require('app/components/ui/CountryCodeSelector/flags/cm.png'),
  "+238": require('app/components/ui/CountryCodeSelector/flags/cv.png'),
  "+236": require('app/components/ui/CountryCodeSelector/flags/cf.png'),
  "+235": require('app/components/ui/CountryCodeSelector/flags/td.png'),
  "+56": require('app/components/ui/CountryCodeSelector/flags/cl.png'),
  "+86": require('app/components/ui/CountryCodeSelector/flags/cn.png'),
  "+57": require('app/components/ui/CountryCodeSelector/flags/co.png'),
  "+269": require('app/components/ui/CountryCodeSelector/flags/km.png'),
  "+242": require('app/components/ui/CountryCodeSelector/flags/cg.png'),
  "+506": require('app/components/ui/CountryCodeSelector/flags/cr.png'),
  "+385": require('app/components/ui/CountryCodeSelector/flags/hr.png'),
  "+53": require('app/components/ui/CountryCodeSelector/flags/cu.png'),
  "+357": require('app/components/ui/CountryCodeSelector/flags/cy.png'),
  "+420": require('app/components/ui/CountryCodeSelector/flags/cz.png'),
  "+45": require('app/components/ui/CountryCodeSelector/flags/dk.png'),
  "+253": require('app/components/ui/CountryCodeSelector/flags/dj.png'),
  "+1767": require('app/components/ui/CountryCodeSelector/flags/dm.png'),
  "+1809": require('app/components/ui/CountryCodeSelector/flags/do.png'),
  "+593": require('app/components/ui/CountryCodeSelector/flags/ec.png'),
  "+20": require('app/components/ui/CountryCodeSelector/flags/eg.png'),
  "+503": require('app/components/ui/CountryCodeSelector/flags/sv.png'),
  "+240": require('app/components/ui/CountryCodeSelector/flags/gq.png'),
  "+291": require('app/components/ui/CountryCodeSelector/flags/er.png'),
  "+372": require('app/components/ui/CountryCodeSelector/flags/ee.png'),
  "+268": require('app/components/ui/CountryCodeSelector/flags/sz.png'),
  "+251": require('app/components/ui/CountryCodeSelector/flags/et.png'),
  "+679": require('app/components/ui/CountryCodeSelector/flags/fj.png'),
  "+358": require('app/components/ui/CountryCodeSelector/flags/fi.png'),
  "+33": require('app/components/ui/CountryCodeSelector/flags/fr.png'),
  "+241": require('app/components/ui/CountryCodeSelector/flags/ga.png'),
  "+220": require('app/components/ui/CountryCodeSelector/flags/gm.png'),
  "+995": require('app/components/ui/CountryCodeSelector/flags/ge.png'),
  "+49": require('app/components/ui/CountryCodeSelector/flags/de.png'),
  "+233": require('app/components/ui/CountryCodeSelector/flags/gh.png'),
  "+30": require('app/components/ui/CountryCodeSelector/flags/gr.png'),
  "+1473": require('app/components/ui/CountryCodeSelector/flags/gd.png'),
  "+502": require('app/components/ui/CountryCodeSelector/flags/gt.png'),
  "+224": require('app/components/ui/CountryCodeSelector/flags/gn.png'),
  "+245": require('app/components/ui/CountryCodeSelector/flags/gw.png'),
  "+592": require('app/components/ui/CountryCodeSelector/flags/gy.png'),
  "+509": require('app/components/ui/CountryCodeSelector/flags/ht.png'),
  "+504": require('app/components/ui/CountryCodeSelector/flags/hn.png'),
  "+36": require('app/components/ui/CountryCodeSelector/flags/hu.png'),
  "+354": require('app/components/ui/CountryCodeSelector/flags/is.png'),
  "+91": require('app/components/ui/CountryCodeSelector/flags/in.png'),
  "+62": require('app/components/ui/CountryCodeSelector/flags/id.png'),
  "+98": require('app/components/ui/CountryCodeSelector/flags/ir.png'),
  "+964": require('app/components/ui/CountryCodeSelector/flags/iq.png'),
  "+353": require('app/components/ui/CountryCodeSelector/flags/ie.png'),
  "+972": require('app/components/ui/CountryCodeSelector/flags/il.png'),
  "+39": require('app/components/ui/CountryCodeSelector/flags/it.png'),
  "+1876": require('app/components/ui/CountryCodeSelector/flags/jm.png'),
  "+81": require('app/components/ui/CountryCodeSelector/flags/jp.png'),
  "+962": require('app/components/ui/CountryCodeSelector/flags/jo.png'),
  "+254": require('app/components/ui/CountryCodeSelector/flags/ke.png'),
  "+686": require('app/components/ui/CountryCodeSelector/flags/ki.png'),
  "+965": require('app/components/ui/CountryCodeSelector/flags/kw.png'),
  "+996": require('app/components/ui/CountryCodeSelector/flags/kg.png'),
  "+856": require('app/components/ui/CountryCodeSelector/flags/la.png'),
  "+371": require('app/components/ui/CountryCodeSelector/flags/lv.png'),
  "+961": require('app/components/ui/CountryCodeSelector/flags/lb.png'),
  "+266": require('app/components/ui/CountryCodeSelector/flags/ls.png'),
  "+231": require('app/components/ui/CountryCodeSelector/flags/lr.png'),
  "+218": require('app/components/ui/CountryCodeSelector/flags/ly.png'),
  "+423": require('app/components/ui/CountryCodeSelector/flags/li.png'),
  "+370": require('app/components/ui/CountryCodeSelector/flags/lt.png'),
  "+352": require('app/components/ui/CountryCodeSelector/flags/lu.png'),
  "+261": require('app/components/ui/CountryCodeSelector/flags/mg.png'),
  "+265": require('app/components/ui/CountryCodeSelector/flags/mw.png'),
  "+60": require('app/components/ui/CountryCodeSelector/flags/my.png'),
  "+960": require('app/components/ui/CountryCodeSelector/flags/mv.png'),
  "+223": require('app/components/ui/CountryCodeSelector/flags/ml.png'),
  "+356": require('app/components/ui/CountryCodeSelector/flags/mt.png'),
  "+692": require('app/components/ui/CountryCodeSelector/flags/mh.png'),
  "+222": require('app/components/ui/CountryCodeSelector/flags/mr.png'),
  "+230": require('app/components/ui/CountryCodeSelector/flags/mu.png'),
  "+52": require('app/components/ui/CountryCodeSelector/flags/mx.png'),
  "+691": require('app/components/ui/CountryCodeSelector/flags/fm.png'),
  "+373": require('app/components/ui/CountryCodeSelector/flags/md.png'),
  "+377": require('app/components/ui/CountryCodeSelector/flags/mc.png'),
  "+976": require('app/components/ui/CountryCodeSelector/flags/mn.png'),
  "+382": require('app/components/ui/CountryCodeSelector/flags/me.png'),
  "+212": require('app/components/ui/CountryCodeSelector/flags/ma.png'),
  "+258": require('app/components/ui/CountryCodeSelector/flags/mz.png'),
  "+95": require('app/components/ui/CountryCodeSelector/flags/mm.png'),
  "+264": require('app/components/ui/CountryCodeSelector/flags/na.png'),
  "+674": require('app/components/ui/CountryCodeSelector/flags/nr.png'),
  "+977": require('app/components/ui/CountryCodeSelector/flags/np.png'),
  "+31": require('app/components/ui/CountryCodeSelector/flags/nl.png'),
  "+64": require('app/components/ui/CountryCodeSelector/flags/nz.png'),
  "+505": require('app/components/ui/CountryCodeSelector/flags/ni.png'),
  "+227": require('app/components/ui/CountryCodeSelector/flags/ne.png'),
  "+234": require('app/components/ui/CountryCodeSelector/flags/ng.png'),
  "+850": require('app/components/ui/CountryCodeSelector/flags/kp.png'),
  "+389": require('app/components/ui/CountryCodeSelector/flags/mk.png'),
  "+47": require('app/components/ui/CountryCodeSelector/flags/no.png'),
  "+968": require('app/components/ui/CountryCodeSelector/flags/om.png'),
  "+92": require('app/components/ui/CountryCodeSelector/flags/pk.png'),
  "+680": require('app/components/ui/CountryCodeSelector/flags/pw.png'),
  "+507": require('app/components/ui/CountryCodeSelector/flags/pa.png'),
  "+675": require('app/components/ui/CountryCodeSelector/flags/pg.png'),
  "+595": require('app/components/ui/CountryCodeSelector/flags/py.png'),
  "+51": require('app/components/ui/CountryCodeSelector/flags/pe.png'),
  "+63": require('app/components/ui/CountryCodeSelector/flags/ph.png'),
  "+48": require('app/components/ui/CountryCodeSelector/flags/pl.png'),
  "+351": require('app/components/ui/CountryCodeSelector/flags/pt.png'),
  "+974": require('app/components/ui/CountryCodeSelector/flags/qa.png'),
  "+40": require('app/components/ui/CountryCodeSelector/flags/ro.png'),
  "+7": require('app/components/ui/CountryCodeSelector/flags/ru.png'),
  "+250": require('app/components/ui/CountryCodeSelector/flags/rw.png'),
  "+1869": require('app/components/ui/CountryCodeSelector/flags/kn.png'),
  "+1758": require('app/components/ui/CountryCodeSelector/flags/lc.png'),
  "+1784": require('app/components/ui/CountryCodeSelector/flags/vc.png'),
  "+685": require('app/components/ui/CountryCodeSelector/flags/ws.png'),
  "+378": require('app/components/ui/CountryCodeSelector/flags/sm.png'),
  "+239": require('app/components/ui/CountryCodeSelector/flags/st.png'),
  "+966": require('app/components/ui/CountryCodeSelector/flags/sa.png'),
  "+221": require('app/components/ui/CountryCodeSelector/flags/sn.png'),
  "+381": require('app/components/ui/CountryCodeSelector/flags/rs.png'),
  "+248": require('app/components/ui/CountryCodeSelector/flags/sc.png'),
  "+232": require('app/components/ui/CountryCodeSelector/flags/sl.png'),
  "+65": require('app/components/ui/CountryCodeSelector/flags/sg.png'),
  "+421": require('app/components/ui/CountryCodeSelector/flags/sk.png'),
  "+386": require('app/components/ui/CountryCodeSelector/flags/si.png'),
  "+677": require('app/components/ui/CountryCodeSelector/flags/sb.png'),
  "+252": require('app/components/ui/CountryCodeSelector/flags/so.png'),
  "+27": require('app/components/ui/CountryCodeSelector/flags/za.png'),
  "+82": require('app/components/ui/CountryCodeSelector/flags/kr.png'),
  "+211": require('app/components/ui/CountryCodeSelector/flags/ss.png'),
  "+34": require('app/components/ui/CountryCodeSelector/flags/es.png'),
  "+94": require('app/components/ui/CountryCodeSelector/flags/lk.png'),
  "+249": require('app/components/ui/CountryCodeSelector/flags/sd.png'),
  "+597": require('app/components/ui/CountryCodeSelector/flags/sr.png'),
  "+46": require('app/components/ui/CountryCodeSelector/flags/se.png'),
  "+41": require('app/components/ui/CountryCodeSelector/flags/ch.png'),
  "+963": require('app/components/ui/CountryCodeSelector/flags/sy.png'),
  "+886": require('app/components/ui/CountryCodeSelector/flags/tw.png'),
  "+992": require('app/components/ui/CountryCodeSelector/flags/tj.png'),
  "+255": require('app/components/ui/CountryCodeSelector/flags/tz.png'),
  "+66": require('app/components/ui/CountryCodeSelector/flags/th.png'),
  "+670": require('app/components/ui/CountryCodeSelector/flags/tl.png'),
  "+228": require('app/components/ui/CountryCodeSelector/flags/tg.png'),
  "+676": require('app/components/ui/CountryCodeSelector/flags/to.png'),
  "+1868": require('app/components/ui/CountryCodeSelector/flags/tt.png'),
  "+216": require('app/components/ui/CountryCodeSelector/flags/tn.png'),
  "+90": require('app/components/ui/CountryCodeSelector/flags/tr.png'),
  "+993": require('app/components/ui/CountryCodeSelector/flags/tm.png'),
  "+688": require('app/components/ui/CountryCodeSelector/flags/tv.png'),
  "+256": require('app/components/ui/CountryCodeSelector/flags/ug.png'),
  "+380": require('app/components/ui/CountryCodeSelector/flags/ua.png'),
  "+971": require('app/components/ui/CountryCodeSelector/flags/ae.png'),
  "+44": require('app/components/ui/CountryCodeSelector/flags/gb.png'),
  "+1": require('app/components/ui/CountryCodeSelector/flags/us.png'),
  "+598": require('app/components/ui/CountryCodeSelector/flags/uy.png'),
  "+998": require('app/components/ui/CountryCodeSelector/flags/uz.png'),
  "+678": require('app/components/ui/CountryCodeSelector/flags/vu.png'),
  "+379": require('app/components/ui/CountryCodeSelector/flags/va.png'),
  "+58": require('app/components/ui/CountryCodeSelector/flags/ve.png'),
  "+84": require('app/components/ui/CountryCodeSelector/flags/vn.png'),
  "+967": require('app/components/ui/CountryCodeSelector/flags/ye.png'),
  "+260": require('app/components/ui/CountryCodeSelector/flags/zm.png'),
  "+263": require('app/components/ui/CountryCodeSelector/flags/zw.png'),
};

export default flagImages;