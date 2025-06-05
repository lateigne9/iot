package com.example.tpfinaliot;

import com.example.tpfinaliot.models.Donnee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;

@Repository
public interface IRepositoryDonees extends JpaRepository<Donnee,Long> {

    List<Donnee> findByDateAfter(LocalDateTime date);
}
