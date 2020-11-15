package utils;

import dao.Entry;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;

@ManagedBean(name = "entryChecker")
@ApplicationScoped
public class EntryChecker {

    public boolean check(Entry entry) {
        if (entry.getX() >= 0) {
            if (entry.getY() >= 0) {
                return check1(entry);
            } else {
                return check4(entry);
            }
        } else {
            if (entry.getY() > 0) {
                return check2(entry);
            } else {
                return check3(entry);
            }
        }
    }

    private boolean check1(Entry entry) {
        return -2 * entry.getX() + entry.getR() >= entry.getY();
    }

    private boolean check2(Entry entry) {
        return false;
    }

    private boolean check3(Entry entry) {
        return entry.getX() * entry.getX() + entry.getY() * entry.getY() <= (entry.getR()/ 2) * (entry.getR()/ 2);
    }

    private boolean check4(Entry entry) {
        return entry.getX() <= entry.getR()  && entry.getY() >= -entry.getR()/ 2;
    }

}
