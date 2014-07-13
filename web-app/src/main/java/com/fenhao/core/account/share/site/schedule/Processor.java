package com.fenhao.core.account.share.site.schedule;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class Processor {

    ScheduledThreadPoolExecutor exec = new ScheduledThreadPoolExecutor(1);
    private static SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public void doProcess() {
        exec.scheduleAtFixedRate(new Runnable() {
            public void run() {
                new Acceeser().keepLogin();
                System.out.println(format.format(new Date()));
            }
        }, 1, 10, TimeUnit.SECONDS);

    }

    public static void main(String[] args) {
        new Processor().doProcess();
    }

}
