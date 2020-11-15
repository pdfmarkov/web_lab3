package utils;

import beans.EntryBean;
import dao.Entry;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;

@ManagedBean(name = "entryFactory")
@ApplicationScoped
public class EntryFactory {

    public Entry buildEntry(EntryBean bean) {
        Entry res = new Entry();
        res.setX(bean.getX());
        res.setY(bean.getY());
        res.setR(bean.getR());
        res.setStatus(bean.getStatus());
        return res;
    }
    
    public Double getRealValue(Double wrongValue) {
        if (wrongValue == 1) return 1.0;
        else if (wrongValue == 2) return 1.5;
        else if (wrongValue == 3) return 2.0;
        else if (wrongValue == 4) return 2.5;
        else if (wrongValue == 5) return 3.0;
        else if (wrongValue == 6) return 3.5;
        else if (wrongValue == 7) return 4.0;
        else return 1.0;
    }
}
