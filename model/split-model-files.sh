head -n  8000 fsc-model.csv > fsc-model-1.csv
tail -n +8001 fsc-model.csv > fsc-model-2.csv

head -n  4000 fsc-model-1.csv > fsc-model-1a.csv
tail -n +4001 fsc-model-1.csv > fsc-model-1b.csv

head -n  2000 fsc-model-1a.csv > fsc-model-1a1.csv
tail -n +2001 fsc-model-1a.csv > fsc-model-1a2.csv

head -n  2000 fsc-model-1b.csv > fsc-model-1b1.csv
tail -n +2001 fsc-model-1b.csv > fsc-model-1b2.csv

## 2
head -n  4000 fsc-model-2.csv > fsc-model-2a.csv
tail -n +4001 fsc-model-2.csv > fsc-model-2b.csv

head -n  2000 fsc-model-2a.csv > fsc-model-2a1.csv
tail -n +2001 fsc-model-2a.csv > fsc-model-2a2.csv

head -n  2000 fsc-model-2b.csv > fsc-model-2b1.csv
tail -n +2001 fsc-model-2b.csv > fsc-model-2b2.csv

rm -f  fsc-model-1.csv fsc-model-2.csv 
rm -f  fsc-model-1a.csv fsc-model-1b.csv  

rm -f  fsc-model-2a.csv fsc-model-2b.csv  

