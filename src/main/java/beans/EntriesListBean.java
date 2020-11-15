package beans;

import dao.Entry;
import lombok.Data;
import lombok.NoArgsConstructor;
import repository.EntryRepository;
import repository.EntryRepositoryImpl;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.SessionScoped;
import javax.faces.bean.ViewScoped;
import javax.inject.Inject;
import java.util.List;

@ManagedBean(name = "entries")
@ViewScoped
@Data
@NoArgsConstructor
public class EntriesListBean {

    @Inject
    private EntryRepository entryRepository;

    private List<Entry> entries;

    @PostConstruct
    public void init() {
        loadEntries();
    }

    public void loadEntries() {
        this.entries = entryRepository.findAll();
    }

    public List<Entry> getEntries() {
        loadEntries();
        return entries;
    }
}
